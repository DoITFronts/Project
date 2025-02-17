import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Icon from '../shared/Icon';

interface DropDownProps {
  /** 트리거를 컴포넌트로 받음.  */
  trigger: React.ReactNode;
  /** 드롭다운에 표시될 옵션 배열 */
  options: string[] | React.ReactNode;
  /** 옵션 선택 시 호출되는 콜백 함수 */
  onSelect: (selected: string) => void;
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
 *       optionClassName="원하는 옵션 아이템 스타일 값"
         triger={
          <원하는 버튼 스타일링></>
         }
 *     />
 *   );
 * }
 * ```
 */

export default function DropDown({ options, onSelect, optionClassName, trigger }: DropDownProps) {
  const [selected, setSelected] = useState('');
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
      <button type="button" onClick={() => setIsOpen(!isOpen)} className={`flex items-center`}>
        {trigger}
      </button>

      {isOpen && (
        <div className="absolute z-10 w-fit mt-1 rounded-lg bg-white shadow-lg">
          {Array.isArray(options) ? (
            <ul>
              {options.map((option, index) => (
                <li
                  key={`${option}-${index}`}
                  onClick={() => onSelect(option)}
                  className={optionClassName}
                >
                  {option}
                </li>
              ))}
            </ul>
          ) : (
            options
          )}
        </div>
      )}
    </div>
  );
}
