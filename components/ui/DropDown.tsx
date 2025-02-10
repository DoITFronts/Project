import { useEffect, useRef, useState } from 'react';

interface DropDownProps {
  /** 드롭다운에 표시될 옵션 배열 */
  options: string[];
  /** 옵션 선택 시 호출되는 콜백 함수 */
  onSelect: (selected: string) => void;
  /** 드롭다운의 초기 선택값 */
  defaultValue?: string;
  /** 선택값이 없을 때 표시될 텍스트 */
  placeholder?: string;
  /** 드롭다운 버튼에 적용될 클래스 */
  className?: string;
  /** 드롭다운 옵션 아이템에 적용될 클래스 */
  optionClassName?: string;
}

/**
 * 커스텀 드롭다운 컴포넌트
 *
 * @component
 * @example
 * ```tsx
 * function example() {
 *   const [item, setItem] = useState<string>('');
 *
 *   return (
 *     <DropDown
 *       options={['최신순', '오래된순', '인기순']}
 *       onSelect={setItem}
 *       defaultValue="최신순"
 *       placeholder="정렬 기준 선택"
 *       className="원하는 버튼 스타일 값"
 *       optionClassName="원하는 옵션 아이템 스타일 값"
 *     />
 *   );
 * }
 * ```
 */

export default function DropDown({
  options,
  onSelect,
  defaultValue = '',
  placeholder = '',
  className,
  optionClassName,
}: DropDownProps) {
  const [selected, setSelected] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleSelected = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button type="button" onClick={() => setIsOpen(!isOpen)} className={className}>
        <span>{selected || placeholder}</span>
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 rounded-lg bg-white shadow-lg">
          {options.map((option, index) => (
            <li
              key={`${option}-${index}`}
              onClick={() => handleSelected(option)}
              className={`${optionClassName} ${index === 0 ? 'rounded-t-lg' : ''} ${index === options.length - 1 ? 'rounded-b-lg' : ''}`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
